require 'test_helper'

class CansControllerTest < ActionDispatch::IntegrationTest
  setup do
    @can = cans(:one)
  end

  test "should get index" do
    get cans_url
    assert_response :success
  end

  test "should get new" do
    get new_can_url
    assert_response :success
  end

  test "should create can" do
    assert_difference('Can.count') do
      post cans_url, params: { can: { address: @can.address, can_type: @can.can_type, latitude: @can.latitude, longitude: @can.longitude } }
    end

    assert_redirected_to can_url(Can.last)
  end

  test "should show can" do
    get can_url(@can)
    assert_response :success
  end

  test "should get edit" do
    get edit_can_url(@can)
    assert_response :success
  end

  test "should update can" do
    patch can_url(@can), params: { can: { address: @can.address, can_type: @can.can_type, latitude: @can.latitude, longitude: @can.longitude } }
    assert_redirected_to can_url(@can)
  end

  test "should destroy can" do
    assert_difference('Can.count', -1) do
      delete can_url(@can)
    end

    assert_redirected_to cans_url
  end
end
