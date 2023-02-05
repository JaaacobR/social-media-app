defmodule SocialMediaApi.Repo do
  use Ecto.Repo,
    otp_app: :social_media_api,
    adapter: Ecto.Adapters.Postgres
end
