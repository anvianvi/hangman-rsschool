export function renderGallows() {
  const container = document.querySelector('.game-field-container')

  const gallowsBox = document.createElement('div')
  gallowsBox.className = 'gallows-box'

  const column = document.createElement('div')
  column.className = 'column'

  const girder = document.createElement('div')
  girder.className = 'girder'

  const diagonal = document.createElement('div')
  diagonal.className = 'diagonal'

  const rope = document.createElement('div')
  rope.className = 'rope'

  const head = document.createElement('div')
  head.className = 'parts parts-head'
  head.id = 'parts-head'

  const body = document.createElement('div')
  body.className = 'parts parts-body'
  body.id = 'parts-body'

  const leftArm = document.createElement('div')
  leftArm.className = 'parts parts-left-arm'
  leftArm.id = 'parts-left-arm'

  const rightArm = document.createElement('div')
  rightArm.className = 'parts parts-right-arm'
  rightArm.id = 'parts-right-arm'

  const leftLeg = document.createElement('div')
  leftLeg.className = 'parts parts-left-leg'
  leftLeg.id = 'parts-left-leg'

  const rightLeg = document.createElement('div')
  rightLeg.className = 'parts parts-right-leg'
  rightLeg.id = 'parts-right-leg'

  gallowsBox.appendChild(column)
  gallowsBox.appendChild(girder)
  gallowsBox.appendChild(diagonal)
  gallowsBox.appendChild(rope)

  gallowsBox.appendChild(head)
  gallowsBox.appendChild(body)
  gallowsBox.appendChild(leftArm)
  gallowsBox.appendChild(rightArm)
  gallowsBox.appendChild(leftLeg)
  gallowsBox.appendChild(rightLeg)


  container.appendChild(gallowsBox)
  console.log(1)
}