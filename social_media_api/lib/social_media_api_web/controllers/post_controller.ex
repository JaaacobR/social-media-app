defmodule SocialMediaApiWeb.PostController do
  use SocialMediaApiWeb, :controller

  alias SocialMediaApi.Posts
  alias SocialMediaApi.Posts.Post
  alias SocialMediaApi.Users

  action_fallback SocialMediaApiWeb.FallbackController

  def index(conn, _params) do
    posts = Posts.list_posts()
    render(conn, "index.json", posts: posts)
  end

  def create(conn, %{"post" => post_params}) do
    IO.inspect(post_params["user_id"])
    a = Users.get_user!(post_params["user_id"])
    IO.inspect(a)
    with user <- Users.get_user!(post_params["user_id"]),
    {:ok, %Post{} = post} <- Posts.create_post(user, post_params) do
      conn
      |> put_status(:created)
      |> render("show.json", post: post)
    end
  end

  def show(conn, %{"id" => id}) do
    post = Posts.get_post!(id)
    render(conn, "show.json", post: post)
  end

  def update(conn, %{"id" => id, "post" => post_params}) do
    post = Posts.get_post!(id)

    with {:ok, %Post{} = post} <- Posts.update_post(post, post_params) do
      render(conn, "show.json", post: post)
    end
  end

  def delete(conn, %{"id" => id}) do
    post = Posts.get_post!(id)

    with {:ok, %Post{}} <- Posts.delete_post(post) do
      send_resp(conn, :no_content, "")
    end
  end
end
