using ProjctShopCMS.DAL.ViewModel;
using ProjectShopCMS.DAL;
using System;
using System.Linq;
using System.Web.Mvc;
using System.Web.Security;

namespace ProjectsShopCMS.Controllers
{
    public class AccountController : Controller
    {
        ProjectShopDBEntities db = new ProjectShopDBEntities();

        // GET: Account
        public ActionResult Register()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Register(RegisterViewModel register)
        {
            if (ModelState.IsValid)
            {
                if (!db.User.Any(u => u.Email == register.Email.Trim().ToLower()))
                {
                    User user = new User()
                    {
                        UserName=register.UserName,
                        Email=register.Email.Trim().ToLower(),
                        Password=FormsAuthentication.HashPasswordForStoringInConfigFile(register.Password,"MD5"),
                        ActivationCode=Guid.NewGuid().ToString(),
                        IsActive=false,
                        CreateDate=DateTime.Now,
                        RoleId=1
                    };
                    db.User.Add(user);
                    db.SaveChanges();
                    return View("SuccessMessageForRegister",user);
                }
                else
                {
                    ModelState.AddModelError("Email", "ایمیل وارد شده تکراری می باشد");
                }
            }

            return View(register);
        }
    }
}