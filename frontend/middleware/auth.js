export default function ({ store, redirect }) {
    if (!store.state.user) {
      console.log("in middleware");
      return redirect("/login");

    }
  }
  