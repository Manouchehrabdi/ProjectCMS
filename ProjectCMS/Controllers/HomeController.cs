using MD.PersianDateTime.Standard;
using ProjectShopCMS.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjectShopCMS.Controllers
{
    public class HomeController : Controller
    {
        ProjectShopDBEntities db = new ProjectShopDBEntities();
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Slider()
        {
            DateTime dateTime = new DateTime(PersianDateTime.Now.Year, PersianDateTime.Now.Month, PersianDateTime.Now.Day, 0, 0, 0);
            var getSlider = db.Slider.Where(s => s.IsActive && s.StartSliderDate >= dateTime && s.EndSliderDate>=dateTime);
            return PartialView(getSlider);
        }
    }
}