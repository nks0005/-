using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


/*
 * Nullable 자료형, var 데이터 형식을 알아서 파악하는 자료형
 */
namespace CSharp
{
    class Program_4
    {
        static void Main(string[] args)
        {
            int? a = null;

            Console.WriteLine(a.HasValue);
            Console.WriteLine(a != null);

            a = 3;

            Console.WriteLine(a.HasValue);
            Console.WriteLine(a != null);
            Console.WriteLine(a.Value);




            // -----------------------------------------------------



            var c = 20;
            Console.WriteLine("Type : {0}. Value : {1}", c.GetType(), c);

            var b = 3.1414213;
            Console.WriteLine("Type : {0}. Value : {1}", b.GetType(), b);

            var e = "Hello World";
            Console.WriteLine("Type : {0}. Value : {1}", e.GetType(), e);

            var f = new int[] { 10, 20, 30 };
            Console.Write("Type : {0}, Value : ", f.GetType());
            foreach(var p in f)
            {
                Console.Write("{0}", p);
            }
            Console.WriteLine();
        }
    }
}
