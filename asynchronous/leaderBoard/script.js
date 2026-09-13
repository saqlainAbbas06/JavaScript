const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Back-End Development', className: 'backend' }
};

const timeAgo = (time) => {
  const currentTime = new Date();
  const lastPost = new Date(time);
  
  const timeDifference = currentTime - lastPost;
  const msPerMinute = 1000 * 60;
  
  const minutesAgo = Math.floor(timeDifference / msPerMinute);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  if (minutesAgo < 60) {
    return `${minutesAgo}m ago`;
  }
  if (hoursAgo < 24) {
    return `${hoursAgo}h ago`;
  }
  return `${daysAgo}d ago`;
};

const viewCount = (views) =>{
  if(views >= 1000){
    return `${Math.floor(views/1000)}k`
  }
  return views;
}

const forumCategory =(id)=>{
  let selectedCategory = {}

  if(allCategories.hasOwnProperty(id)){
    const {className, category} = allCategories[id]
    selectedCategory['className'] = className;
    selectedCategory['category'] = category
  }else{
    selectedCategory['className'] = "general"
    selectedCategory['category'] = 'General'
  }
  const url = `${forumCategoryUrl}${selectedCategory.className}/${id}`
  const linkText = selectedCategory.category
  const linkClass = `category ${selectedCategory.className}`;

  return `<a class='${linkClass}' href="${url}">${linkText}</a>`
}


const avatars = (posters, users)=>{
  return posters.map((poster)=>{
    const user = users.find((user) => user.id === poster.user_id)
    if(user){
      const avatar = user.avatar_template.replace(/{size}/, 30)
      const userAvatarUrl = avatar.startsWith("/") ? avatarUrl + avatar : avatar;
      return `<img src="${userAvatarUrl}" alt="${user.name}" />`
    }
  }).join("")

}

const showLatestPosts = (data)=>{
  const {topic_list, users} = data;
  const {topics} = topic_list;

  const postsContainer = document.getElementById("posts-container")

  postsContainer.innerHTML = topics.map((item)=>{
    const{id, title, views, posts_count, slug, posters, category_id, bumped_at} = item;

    return `<tr>
    <td>
    <a class='post-title' href="${forumTopicUrl}${slug}/${id}">${title}</a>
    ${forumCategory(category_id)}
    </td>
    <td>
    <div class="avatar-container">
        ${avatars(posters, users)}
      </div>
      </td>
   <td>${posts_count-1}</td>
    <td>${viewCount(views)}</td>
    <td>${timeAgo(bumped_at)}</td>
    </tr>`
  }).join("")
}

const fetchData = async ()=>{
  try{
    const res = await fetch(forumLatest);
    const data = await res.json()
    showLatestPosts(data)
  }catch(err){
    console.log(err)
  }
}
