
class HeaderText

  span: $("#✓")
  speed: 1
  startDelay: 5
  backDelay: 5000
  loop: true
  texts: [
    "a better web"
    "reliable applications"
    "future technologies"
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

  constructor: ->
    @blocks = @div.find "blockquote"
    @max = @blocks.length - 1
    @index = Math.floor(Math.random() * @max)
    console.log @index

  go: ->
    $(@blocks[@index]).hide 500, =>
      @index = if @index == @max then 0 else @index + 1
      $(@blocks[@index]).show 500


typing = new HeaderText
lovelyPeople = new Quotes
do lovelyPeople.go

setInterval ->
  do lovelyPeople.go
, 6000