
class HeaderText

  span: $("#✓")
  speed: 1
  startDelay: 5
  backDelay: 5000
  loop: true
  texts: [
    "a better web."
    "reliable applications."
    "future technologies."
  ]

  constructor: ->
    @span.typed
      strings: @texts
      typeSpeed: @speed
      startDelay: @startDelay
      backDelay: @backDelay
      loop: @loop


class Quotes

  div: $("#❤")
  wrapper: $(".quotes-wrapper")

  constructor: ->
    @blocks = @div.find "blockquote"
    @max = @blocks.length - 1
    @index = Math.floor(Math.random() * @max)

    @t = new Trianglify
      x_gradient: Trianglify.colorbrewer.YlOrRd[9]
      y_gradient: Trianglify.colorbrewer.PuBuGn[9]
      cellsize: 50

  go: ->
    $(@blocks[@index]).animate
      opacity: 0
    , 2000, =>
      do $(@blocks[@index]).hide
      @index = if @index == @max then 0 else @index + 1
      $(@blocks[@index]).show().animate
        opacity: 1
      , 500

  renderpolys: ->
    @pattern = @t.generate document.body.clientWidth, 300
    @wrapper.css 'background-image', @pattern.dataUrl




class LowPolygonHeader

  header: $(".lowpoly")

  constructor: ->
    @t = new Trianglify
      x_gradient: Trianglify.colorbrewer.RdPu[4]
      y_gradient: Trianglify.colorbrewer.YlOrRd[9]
      cellsize: 150

  render: ->
    @pattern = @t.generate document.body.clientWidth, 350
    @header.css 'background-image', @pattern.dataUrl

  text: ->
    $(".lowpoly h1").fitText 1


class Map

  key: "AIzaSyBnc-uPScjnFVm4tM2N5Tn9q-UDD2BpnSE"
  options:
    zoom: 15
    center: new google.maps.LatLng 55.8639354, -4.3183053
    scrollwheel: false
    navigationControl: false
    mapTypeControl: false
    scaleControl: true
    draggable: true
    disableDefaultUI: false
    disableDoubleClickZoom: false

  constructor: ->
    @map = new google.maps.Map document.getElementById("map"), @options

  addMarker: ->
    latlngset = new google.maps.LatLng 55.8639354, -4.3183053
    marker = new google.maps.Marker
      map: @map,
      title: "Rawtech.io Limited",
      position: latlngset,


# Page header
typing = new HeaderText
lowpoly = new LowPolygonHeader
do lowpoly.render
do lowpoly.text

# Quotes from some lovely people
lovelyPeople = new Quotes
do lovelyPeople.renderpolys
do lovelyPeople.go

$(window).resize ->
  do lovelyPeople.renderpolys
  do lowpoly.render

setInterval ->
  do lovelyPeople.go
, 6000

location = new Map
do location.addMarker