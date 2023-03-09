defmodule SocialMediaApi.PostsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `SocialMediaApi.Posts` context.
  """

  @doc """
  Generate a post.
  """
  def post_fixture(attrs \\ %{}) do
    {:ok, post} =
      attrs
      |> Enum.into(%{
        : "some ",
        description: "some description"
      })
      |> SocialMediaApi.Posts.create_post()

    post
  end
end
