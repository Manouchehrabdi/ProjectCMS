using ProjectShopCMS.DAL.MetaData;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectShopCMS.DAL
{
   public class SliderMetaData
    {
        [key]
        public int SliderId { get; set; }

        [Display(Name ="عنوان تخفیف ها")]
        public string DiscountTitle { get; set; }

        [Display(Name = "عنوان اسلایدر")]
        [Required(ErrorMessage = "لطفاً {0} را وارد نمایید")]
        public string Title { get; set; }

        [Display(Name = "تصویر")]
        public string ImageName { get; set; }

        [Display(Name = "تاریخ شروع اسلایدر")]
        [Required(ErrorMessage = "لطفاً {0} را وارد نمایید")]
        [Column(TypeName = "datetime2")]
        [DisplayFormat(DataFormatString ="{0:yyyy/MM/dd}",ApplyFormatInEditMode =true)]
        public System.DateTime StartSliderDate { get; set; }

        [Display(Name = "تاریخ پایان اسلایدر")]
        [DisplayFormat(DataFormatString = "{0:yyyy/MM/dd}", ApplyFormatInEditMode = true)]
        [Column(TypeName = "datetime2")]
        public System.DateTime EndSliderDate { get; set; }

        [Display(Name = "فعال/غیرفعال")]
        [Required(ErrorMessage = "لطفاً {0} را وارد نمایید")]
        public bool IsActive { get; set; }
    }
    [MetadataType(typeof(SliderMetaData))]
    public partial class Slider
    {

    }
}
