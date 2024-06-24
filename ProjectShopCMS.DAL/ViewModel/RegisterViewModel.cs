using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjctShopCMS.DAL.ViewModel
{
   public class RegisterViewModel
    {
        [Display(Name = "نام کاربر")]
        [Required(ErrorMessage = " لطفا {0} را وارد نمایید")]
        public string UserName { get; set; }
        [Display(Name = "ایمیل")]
        [Required(ErrorMessage = " لطفا {0} را وارد نمایید")]
        [EmailAddress(ErrorMessage ="لطفا ایمیل معتبر وارد نمایید")]
        public string Email { get; set; }
        [Display(Name = "رمز عبور")]
        [Required(ErrorMessage = " لطفا {0} را وارد نمایید")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        [Display(Name = "تکرار رمز عبور ")]
        [Required(ErrorMessage = " لطفا {0} را وارد نمایید")]
        [DataType(DataType.Password)]
        [Compare("Password",ErrorMessage ="کلمه های عبور با یکدیگر مطابقت ندارند")]
        public string RePassword { get; set; }
    }
}
