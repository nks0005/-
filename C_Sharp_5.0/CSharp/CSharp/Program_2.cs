using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


/*
 * 정수 형식 예제 프로그램
 * 
 */
namespace CSharp
{
    class Program_2
    {
        static void Main(string[] args)
        {
            sbyte a = -10;
            byte b = 40;

            Console.WriteLine("a={0}, b={1}", a, b);

            short c = -30000;
            ushort d = 60000;

            Console.WriteLine("c={0}, d={1}", c, d);

            int e = -10000000;
            uint f = 300000000;

            Console.WriteLine("e={0}, f={1}", e, f);

            long g = -50000000000;
            ulong h = 2000000000000000000;

            Console.WriteLine("g={0}, h={1}", g, h);
        }
    }
}


/*
 * 
 * 음수 값들은 2의 보수로 되어있다.
 * 2의 보수는 모든 비트를 반전 시키고 +1을 한다.
 * 
 * 4 = 0100
 * -4 = 1011 + 1 = 1100
 * 
 * 4 + -4 = 0100 + 1100 = 0000
 */