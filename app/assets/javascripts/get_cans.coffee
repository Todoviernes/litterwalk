@getCans = ->
  failure = ->
    alert 'problem getting location'
  $('.get_location').each (index) ->
    $(this).on 'click', (event) ->
      if navigator.geolocation
        navigator.geolocation.getCurrentPosition ((position) ->
          $.ajax
            type: 'PUT'
            url: '/cans/get_cans' + '?latitude=' + position.coords.latitude + '&longitude=' + position.coords.longitude
            ), failure,
            enableHighAccuracy: true
            timeout: 5000
      event.preventDefault()
$(document).on('turbolinks:load', @getCans)

@createCan = ->
  $('.location_results_list button').on 'click', (event) ->
    data = JSON.parse(JSON.stringify($(this).data('attributes')))
    $.ajax '/cans',
      type: 'POST'
      dataType: 'script'
      data: {
        place: {
          name: data['name']
          address: data['vicinity']
          latitude: data['geometry']['location']['lat']
          longitude: data['geometry']['location']['lng']
        }
      }
      success: (data, status) ->
        console.log 'Data: ' + data + '\nStatus ' + status

    event.preventDefault()