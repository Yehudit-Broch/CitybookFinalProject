using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class CodeFirstContext : DbContext
    {
        public CodeFirstContext() : base("Task")
        {
          //  Database.SetInitializer(new DropCreateDatabaseAlways<CodeFirstContext>());
        }

        public DbSet<Person> Persons{ get; set;}
        public DbSet<ChildPerson> Children { get; set; }
        public DbSet<HMO> HMOs { get; set; }
    }
}
