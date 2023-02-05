# This file is responsible for configuring your application
# and its dependencies with the aid of the Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
import Config

config :social_media_api,
  ecto_repos: [SocialMediaApi.Repo],
  generators: [binary_id: true]

# Configures the endpoint
config :social_media_api, SocialMediaApiWeb.Endpoint,
  url: [host: "localhost"],
  render_errors: [view: SocialMediaApiWeb.ErrorView, accepts: ~w(json), layout: false],
  pubsub_server: SocialMediaApi.PubSub,
  live_view: [signing_salt: "TCckeAzw"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{config_env()}.exs"
