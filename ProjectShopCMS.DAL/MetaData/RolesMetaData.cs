using ProjectShopCMS.DAL.MetaData;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectShopCMS.DAL
{
   public class RolesMetaData
    {
        [key]
        public int RoleId { get; set; }

        [Display(Name = "عنوان نقش")]
        [Required(ErrorMessage = "لطفاً {0} را وارد نمایید")]
        public string RoleTitle { get; set; }

        [Display(Name = "نام نقش")]
        [Required(ErrorMessage = "لطفاً {0} را وارد نمایید")]
        public string RoleName { get; set; }
        public virtual User User { get; set; }
    }
    [MetadataType(typeof(RolesMetaData))]
    public partial class Roles
    {

    }

}
