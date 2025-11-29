export function mergePostswithUsers(posts, users) {
  return posts.map((p) => {
    const creator = users.find((u) => u.uid === p.userId);
    return {
      ...p,
      username: creator ? creator.username : "",
      userAvatar: creator ? creator.avatar : "",
    };
  });
}
