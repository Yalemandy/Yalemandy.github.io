var posts=["2024/05/16/贪吃蛇/","2024/05/16/堆/","2024/05/16/栈/","2024/05/16/希尔排序/","2024/05/16/队列/","2024/05/16/顺序表/","2024/05/16/单向链表/","2024/05/16/双向链表/","2024/05/16/通讯录/","2024/05/16/二叉树/","2024/05/16/顺序表和链表的区别/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };