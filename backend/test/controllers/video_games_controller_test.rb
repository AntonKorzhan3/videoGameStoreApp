require "test_helper"

class VideoGamesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @video_game = video_games(:one)
  end

  test "should get index" do
    get video_games_url, as: :json
    assert_response :success
  end

  test "should create video_game" do
    assert_difference("VideoGame.count") do
      post video_games_url, params: { video_game: { console: @video_game.console, name: @video_game.name, price: @video_game.price, quantity: @video_game.quantity, rating: @video_game.rating } }, as: :json
    end

    assert_response :created
  end

  test "should show video_game" do
    get video_game_url(@video_game), as: :json
    assert_response :success
  end

  test "should update video_game" do
    patch video_game_url(@video_game), params: { video_game: { console: @video_game.console, name: @video_game.name, price: @video_game.price, quantity: @video_game.quantity, rating: @video_game.rating } }, as: :json
    assert_response :success
  end

  test "should destroy video_game" do
    assert_difference("VideoGame.count", -1) do
      delete video_game_url(@video_game), as: :json
    end

    assert_response :no_content
  end
end
