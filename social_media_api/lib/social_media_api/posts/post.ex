defmodule SocialMediaApi.Posts.Post do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "posts" do
    field :description, :string
    belongs_to :user, SocialMediaApi.Users.User
    timestamps()
  end

  @doc false
  def changeset(account, attrs) do
    account
    |> validate_required([:description])
  end

 
end
