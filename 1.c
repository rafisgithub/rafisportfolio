#include<stdio.h>
int leapYear1(int year){
	if(year%400==0 || (year%100!=0 && year%4)){
		return year;
	}else{
		x=year-1;
		leapYear1(x);
	}
}
int leapYear2(int year){
	if(year%400==0 || (year%100!=0 && year%4)){
		return year;
	}else{
		x=year+1;
		leapYear2(x);
	}
}
int main(){
	int year;
	printf("Enter any year to check:\n");
	scanf("%d",year);
	if(year%400==0 || (year%100!=0 && year%4)){
		printf("%d is a leap year.\n",year);
	}else{
		
	}
	return 0;
}