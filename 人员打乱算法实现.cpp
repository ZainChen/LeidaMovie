/*//下标从0开始且有名字 
#include<iostream>
using namespace std;
#include<cstdlib>
#include<ctime>
#include<iomanip>
int main() {
  int k, t = 4, pn = 43;  //pn为人数,如果有43个人
  string a[45] = {"吴小雪", "朱婷", "谢晔玲", "张君", "付建平", "邓琼", "陈志振", "郭丽华", "熊志勇",
                  "鄢艳玲", "谢虎虎", "褚后屹", "康宇晨", "罗剑", "吴小伟", "黄木生", "朱佳", "王福东",
                  "欧阳煜", "邹逸帆", "何银昆", "樊泽亮", "周吉海", "吴志峰", "熊敏", "曾小斌", "李福东",
                  "罗智强", "曾前", "陈涛", "欧著源", "杨成龙", "丰坤", "段聪", "凌杰", "彭昌文",
                  "朱模建", "廖元武", "欧阳浩明", "孔佳承", "徐海洋", "戴新亮", "曾文豪", "44", "45"};
  srand(time(0));
  for(int i = 0; i < pn-1; i++) {
    k = rand() % (pn-1-i);  //0~(44-i)的随机数
    swap(a[k], a[pn-1-i]);
  }
  cout.setf(ios::left);
  cout << "          16" << "        15" << "        14" << "        13" << "        12" << "        11" << "        10" << "        9" << "        8\n第3排   ";
  for(int i = 0; i < pn; i++) {
    cout << setw(10) << a[i];
    if((i+1)%9 == 0) {
      cout << "\n";
      if(i != pn-1) cout << "第" << t++ << "排   ";
    }
  }
}*/
//下标从0开始
#include<iostream>
using namespace std;
#include<cstdlib>
#include<ctime>
int main() {
  int k, a[45];  //如果有45个人 
  srand(time(0));
  for(int i = 0; i < 45; i++) a[i] = i;  //给45个人分别编为0-44号
  for(int i = 0; i < 44; i++) {
    k = rand() % (44-i);  //0~(44-i)的随机数
    swap(a[k], a[44-i]);
  }
  for(int i = 0; i < 45; i++) {
    cout << a[i] << "\t";
    if((i+1)%9 == 0) cout << endl;
  }
}
/*下标从1开始
#include<iostream>
using namespace std;
#include<cstdlib>
#include<ctime>
int main() {
  int p, a[50];
  srand(time(0));
  for(int i = 1; i <= 45; i++) a[i] = i;
  for(int i = 1; i <= 44; i++) {
    p = 1+rand() % (45-i);  //1~(45-i)的随机数
    swap(a[p], a[46-i]);
  }
  for(int i = 1; i <= 45; i++) {
    if((i-1)%9 == 0 && i != 1) cout << endl;
    cout << a[i] << "\t";
  }
}*/
