defmodule SocialMediaApi.Posts.Post do

  import Ecto.Query, warn: false
  alias SocialMediaApi.Repo

  alias SocialMediaApi.Posts.Post

  def get_post!(id) do: Repo.get!(Post, id)    

  def create_post(post, attrs \\ %{}) do
    post
    |> User.changeset(attrs)
    |> Repo.insert()
  end

end