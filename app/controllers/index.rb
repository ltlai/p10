get '/' do
  erb :index
end

post '/avatar' do
  user = Octokit.user params[:username]

  redirect user.avatar_url
end

post '/followers' do
  @followers = Octokit.followers(params[:username])

  erb :followers
end

post '/following' do
  @following = Octokit.following(params[:username])

  erb :following
end
