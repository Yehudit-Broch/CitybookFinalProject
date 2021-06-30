using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class Person
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "TZ is required.")]
        [StringLength(9, ErrorMessage = "The Tz value cannot exceed 9 characters. ")]
        public string Tz { get; set; }

        [Required(ErrorMessage = "FirstName is required.")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "LastName is required.")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "BornDate is required.")]
        public DateTime BornDate { get; set; }

        [Required(ErrorMessage = "Gender is required.")]
        public int Gender { get; set; }

        [Required(ErrorMessage = "HMO is required.")]
        public int HMOId { get; set; }
        public virtual HMO HMO { get; set; }
        public virtual List<ChildPerson> Children { get; set; }

    }
}
