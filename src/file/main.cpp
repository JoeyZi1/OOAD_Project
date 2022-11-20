#include <iostream>

using namespace std;

int main()
{
    int n  = 1;
    int a[5] = {5,4,3,2,1}; 

    auto p2 = std::make_pair(std::ref(n), a);
    n = 7;
    std::cout << "The value of p2 is "
              << "(" << p2.first << ", " << *(p2.second + 2) << ")\n";
}