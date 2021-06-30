using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class HMOLogic
    {
        static CodeFirstContext db = new CodeFirstContext();

        //A function that returns a list of HMOs.
        public static List<HMODto> GetAll()
        {
           var list= db.HMOs.ToList();
           return Convert.Converters.Convert(list);
        }
    }
}
