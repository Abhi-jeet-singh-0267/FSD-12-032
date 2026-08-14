# FIle System (FS MODULE)
- FS module directly communicate with operating system rather than browser

- The common operation on a file or folder are:- 
1. File -> writeFile, ReadFile, AppendFile .  
2. Folder -> mkdir/md, rmdir/rm, reddir .
3. File Stat -> stat, lstat, rstat
4. Watch -> watch, unwatch .
5. Stream -> readStream(), writeStream() .
6.All function are promised it must be called by await keyword.
7.Append :- if file is not present then it create the file and then write into it , 
and if file already exist then it's just simply add the text into the file without removing the text present in the file
8. Write :- if file is not present then it creates the file and then write into it and if file is already present then simply remove all the text from the file and then write the text into it
9. If a function uses await keyword then the function must be async.

# CRUD Project

 C->Create
 R->Retrieve
 U->Update
 D->Delete

Assume we are making a cart related project

1. User can add any product (id, name, price, qty) into cart

2. User can see all the items of cart

3. User can remove item from cart

4. User can also update quantity of product

5. All the item should be stored after terination of project