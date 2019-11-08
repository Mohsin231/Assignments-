/*
10 buckets for digits 0-9

We have 10 buckets we will e using in order to sort these numbers 

Find the number of digits in the biggest number exam. 100--> 3 digits
Make all numbers have 3 digits by padding 0s in front 
Since the numbers all have 3 digits, this will have a 3 pass

Pass 1:
- sort the numbers using the first digit from the right example: 010 and 100 will be in the same bucket 
- When this is complete, take the numbers out of the bucket bottom up and sort them in order from bucket 0-9
Pass 2:
- sort these numbers again using the 2nf digit from the right 
- When this is complete, take the numbers out of the bucket bottom up and sort them in order from bucket 0-9

Pass 3:
- sort the number using the third digit from the right 
- take the numbers out of the buckets and sort them from bottom up
start from the lowest 
 */
import java.util.LinkedList;

public class Radix{
  
  public int findMax(int[] array) {
    int max=array[0];
    for (int i=1;i<array.length;i++){
      if(array[i]>max){
        max=array[i];
        
      }
    }
    return max;
  }
  
  public int getDigit(int n, int degree){ //chop off 1423 to 14
    for(int i=0; i<degree-1; i++){
      n/=10;
  
  }
    return n%10;
  }
  
  public int[] radixSort(int[] array){
    
    int max=findMax(array);
    int maxDigits=1;
    while(max>=10){
      max/=10;
      maxDigits++;
    }
    LinkedList<Integer>[]buckets= new LinkedList[10];
    for(int i=0;i<10;i++){
      buckets[i]=new LinkedList<Integer>();
    }
    
    for(int i=1;i<=maxDigits;i++){//goes through each digit
      for(int j=0;j<array.length;j++){//goes thrugh array and adds to bucket
        int digit=getDigit(array[j],i);
        buckets[digit].add(array[j]);
      }
      int[] newArray=new int[array.length];
      int idx=0;
      for(int j=0;j<buckets.length;j++){
        while(!buckets[j].isEmpty()){
          newArray[idx]=buckets[j].removeFirst();
          idx++;
        }
      }
      array=newArray;
    }
    return array;
  }
  
  public void printArray(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i] + " ");
    }
    System.out.println();
  }
  
  public static void main(String[] args){
    Radix numbers=new Radix();
    int arr[]={1,40,34,12,100,114,90};
    arr = numbers.radixSort(arr);
    numbers.printArray(arr);
  }
  
}
    
    
   
    
    




 
 
 
