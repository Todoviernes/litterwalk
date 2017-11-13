class Can < ApplicationRecord
geocoded_by :address
before_validation :geocode

after_validation :geocode, if: ->(obj){ obj.address.present? and obj.address_changed? }

reverse_geocoded_by :latitude, :longitude,
  :address => :address
before_validation :reverse_geocode

# validates :latitude, uniqueness: { scope: :longitude }
# validates :longitude, uniqueness: { scope: :latitude }

validates :address, uniqueness: true
end
