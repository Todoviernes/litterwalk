require "administrate/base_dashboard"

class CanDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    pictures: Field::HasMany,
    id: Field::Number,
    typeOfCan: Field::String,
    address: Field::String,
    latitude: Field::Number.with_options(decimals: 2),
    longitude: Field::Number.with_options(decimals: 2),
    created_at: Field::DateTime,
    updated_at: Field::DateTime,
    issues: Field::String,
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = [
    :pictures,
    :id,
    :typeOfCan,
    :address,
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = [
    :pictures,
    :id,
    :typeOfCan,
    :address,
    :latitude,
    :longitude,
    :created_at,
    :updated_at,
    :issues,
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = [
    :pictures,
    :typeOfCan,
    :address,
    :latitude,
    :longitude,
    :issues,
  ].freeze

  # Overwrite this method to customize how cans are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(can)
  #   "Can ##{can.id}"
  # end
end
