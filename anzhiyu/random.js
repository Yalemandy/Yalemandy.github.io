var posts=["2024/05/16/AJAX/","2024/05/16/vue3/","2024/05/16/Git/","2024/05/16/智慧商城项目/","2024/05/16/NodeJs/","2024/05/16/css/","2024/05/16/JavaScript/","2024/05/16/堆/","2024/05/16/栈/","2024/05/16/html+css/","2024/05/16/希尔排序/","2024/05/16/快速排序/","2024/05/16/队列/","2024/05/16/顺序表/","2024/05/16/NodeJs Express框架/","2024/05/16/单向链表/","2024/05/16/双向链表/","2024/05/16/二叉树/","2024/05/16/JavaScript Es6-Es11 新语法特性/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };