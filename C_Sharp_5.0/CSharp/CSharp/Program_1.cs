using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// 프로젝트 이름 
/*
 * 네임스페이스는 성격이나 하는 일이 비슷한 클래스, 구조체, 인터페이스, 델리게이트, 열거 형식 등을 하나의 이름 아래 묶는 일을 한다.
 * 예를 들어 .NET 프레임 워크의 System.IO 네임스페이스에는 파일 입출력을 다루는 각종 클래스, 구조체, 델리게이트, 열거 형식들이 있고, System.Printing 네임스페이스에는 인쇄에 관련된 일을 하는 클래스 등이 소속되어 있다.
 * 
 */
namespace CSharp
{
    // cs 파일 이름
    class Program_1
    {
        // 프로그램이 시작되는 지점
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
            Console.WriteLine("Hello, {0}!", args[0]);
        }
    }
}
