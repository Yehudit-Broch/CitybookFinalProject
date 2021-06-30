using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class ChildPerson
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Name is required.")]
        public string Name { get; set; }
        public DateTime BornDate { get; set; }

        [StringLength(9, ErrorMessage = "The Tz value cannot exceed 9 characters. ")]
        public string Tz { get; set; }
        public int PersonId { get; set; }
        public virtual Person Person { get; set; }
    }
}
