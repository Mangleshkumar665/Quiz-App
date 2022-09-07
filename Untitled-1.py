# a={1:"A",2:"b",3:"c"}

# print(a.get(1,4))  A

# # # # # # # # # # # # # # # # print(a.get(5,4))   = 4

# # # # # # # # # # # # # # # def fun(name,age):
# # # # # # # # # # # # # # #     print("is",name)
# # # # # # # # # # # # # # #     print("age is ",age)
    
    
# # # # # # # # # # # # # # # fun(25,"har")   A

# # # # # # # # # # # # # # # a={1:"A",2:"b",3:"c"}

# # # # # # # # # # # # # # # b = a.copy()
# # # # # # # # # # # # # # # b[2] = "D"
# # # # # # # # # # # # # # # print(a)




# # # # # # # # # # # # # # n={}
# # # # # # # # # # # # # # l={}
# # # # # # # # # # # # # # c={}

# # # # # # # # # # # # # # n[1]=56

# # # # # # # # # # # # # # n[3]=7
# # # # # # # # # # # # # # l[4]="B"

# # # # # # # # # # # # # # c['n']=n
# # # # # # # # # # # # # # c['l']=l

# # # # # # # # # # # # # # print(c)  D ans 

# # # # # # # # # # # # # a={1:"A",2:"b",3:"c"}

# # # # # # # # # # # # # for i,j in a.items():
# # # # # # # # # # # # #     print(i,j)
    
# # # # # # # # # # # # #     ans = A


# # # # # # # # # # # # def func(*x):
# # # # # # # # # # # #     print(type(x))
# # # # # # # # # # # # func()


# # # # # # # # # # # y=8
# # # # # # # # # # # z=lambda x:x*y

# # # # # # # # # # # print(z(6,6))



l =list('123456')


l[0] =l[5] = 0
l[3] = l[-2]

print(l)

# a={}
# a[2]= 1
# a[1] =[2,3,4]

# print(a[1][1])


# # # # # # # # a={i:i*i for i in range(6)}
# # # # # # # # print(a)





# # # # # # # def fun(*x):
# # # # # # #     print(x)
    
# # # # # # # fun()
# # # # # # l1 = list()
# # # # # # l1.append([1,[2,3],4])

# # # # # # l1.extend([7,8,9])

# # # # # # print(l1[0][1][1]+ l1[2])
# # # # # # 11


# # # # # t=tuple("jeeps")

# # # # # a,b,c,d,e = t

# # # # # b=c="*"
# # # # # t=(a,b,c,d,e)
# # # # # print(t)

# # # # # a

# # # # c={}
# # # # c[(1,2,4)]  = 5
# # # # c[(4,2,1)]  = 7

# # # # c[(1,2)]  = 6
# # # # c[(4,2,1)]  = 2

# # # # tot=0

# # # # for i in c:
# # # #     tot+=c[i]
    
# # # # print(len(c)+tot)  16


# # # def fun(name,age):
# # #     print(name)
# # #     print(age)
    
# # # fun(25,"top")
# # # a

# # a={}
# # a[1]=1
# # a['1']=2
# # a[1]= a[1]+1
# # c=0
# # for i in a:
# #     c+=a[i]
# # print(c) 4



# tot={}

# def insert(items):
#     if(items in tot):
#         tot[items]+=1
#     else:
#         tot[items]=1
        
# insert('a')
# insert('boob')
# insert('a')
# print(len(tot)) 2



