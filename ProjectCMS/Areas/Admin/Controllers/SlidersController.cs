using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using ProjectShopCMS.DAL;
using System.IO;

namespace ProjectCMS.Areas.Admin.Controllers
{
    public class SlidersController : Controller
    {
        private ProjectShopDBEntities db = new ProjectShopDBEntities();

        // GET: Admin/Sliders
        public ActionResult Index()
        {
            return View(db.Slider.ToList());
        }

        // GET: Admin/Sliders/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Slider slider = db.Slider.Find(id);
            if (slider == null)
            {
                return HttpNotFound();
            }
            return View(slider);
        }

        // GET: Admin/Sliders/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Admin/Sliders/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "DiscountTitle,Title,StartSliderDate,EndSliderDate,IsActive,ImageName")] Slider slider, HttpPostedFileBase imageUpload)
        {
           
            
            if (ModelState.IsValid)
            {
                if (imageUpload == null)
                {
                    slider.ImageName = imageUpload.FileName;
                    ModelState.AddModelError("ImageName", "لطفاً تصویر اسلایدر را انتخاب نمایید");
                    return View(slider);
                }
                slider.ImageName = Guid.NewGuid().ToString() + Path.GetExtension(imageUpload.FileName);//گرفتن پسوند عکس//
                imageUpload.SaveAs(Server.MapPath("/Images/Slider/") + slider.ImageName);
                db.Slider.Add(slider);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(slider);
        }

        // GET: Admin/Sliders/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Slider slider = db.Slider.Find(id);
            if (slider == null)
            {
                return HttpNotFound();
            }
            return View(slider);
        }

        // POST: Admin/Sliders/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "SliderId,DiscountTitle,Title,ImageName,StartSliderDate,EndSliderDate,IsActive")] Slider slider, HttpPostedFileBase imageUpload)
        {
            if (ModelState.IsValid)
            {
                if (imageUpload != null)
                {
                    System.IO.File.Delete(Server.MapPath("/Images/Slider") + slider.ImageName);
                    slider.ImageName = Guid.NewGuid().ToString() + Path.GetExtension(imageUpload.FileName);
                    imageUpload.SaveAs(Server.MapPath("/Images/Slider") + slider.ImageName);
                }
                db.Entry(slider).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(slider);
        }

        // GET: Admin/Sliders/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Slider slider = db.Slider.Find(id);
            if (slider == null)
            {
                return HttpNotFound();
            }
            return View(slider);
        }

        // POST: Admin/Sliders/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Slider slider = db.Slider.Find(id);
            System.IO.File.Delete(Server.MapPath("/Images/Slider") + slider.ImageName);
            db.Slider.Remove(slider);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();

            }
            base.Dispose(disposing);
        }
    }
}
