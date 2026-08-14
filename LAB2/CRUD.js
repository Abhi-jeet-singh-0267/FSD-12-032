import readline from 'readline/promises';
import{stdin, stdout} from 'process';

const main = async()=>{
    let choice;
    const cin = readline.createInterface({input: stdin, output: stdout});
      do{
    console.log("Welcome to FlipKart🐱‍🏍");
    console.log("1.............Show cart");
    console.log("2.............Add product");
    console.log("3..............Remove product");
    console.log("4...............Update quantity");
    console.log("5..............Exit");
    choice= await cin.question("Enter your choice:");
    switch (choice) {
      case 1:
        console.log("Show product");
      case 2:
        console.log("product added");
      case 3:
        console.log("remove product ");
      case 4:
        console.log("update product quantity");
      case 5:
        console.log("See you later");
        break;
      default:  
        console.log("Invalid choice! Try again🤬");
    }

      }while(choice !=5);
    cin.close();
};
main();
