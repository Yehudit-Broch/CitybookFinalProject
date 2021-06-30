using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class PersonLogic
    {
        static CodeFirstContext db = new CodeFirstContext();

        //A function that receives a person's instance and enters its details into the database.
        public static bool AddPerson(PersonDto personDto)
        {
            var person = Convert.Converters.Convert(personDto);
            try
            {
                person.HMO = db.HMOs.Find(personDto.HMOId);
                db.Persons.Add(person);
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}
