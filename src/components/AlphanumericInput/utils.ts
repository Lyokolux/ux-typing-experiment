export type EventType = 'add' | 'delete' | 'replace'
export interface Event {
  type: EventType
  value: string
  success: boolean // does the event make the alphanumeric value valid
  position: number // a char is added/removed/replaced at this position starting from 0
  date: number // timestamp when event is triggered
  ms: number // milliseconds after the first event
}

const getEventType = (value: string, newValue: string): EventType => {
  const valueLength = value.length
  const newValueLength = newValue.length
  if (newValueLength < valueLength) return 'delete'
  if (newValueLength === valueLength && newValue !== value) return 'replace'
  return 'add'
}

const getFirstUnmatchPosition = (value: string, newValue: string): number => {
  for (let position = 0; position < value.length; position += 1) {
    const isMatching = value.charAt(position) === newValue.charAt(position)

    if (!isMatching) {
      return position
    }
  }

  return value.length - 1
}

const getEventPosition = (type: EventType, value: string, newValue: string) => {
  if (type === 'add') {
    return newValue.length - 1
  }

  return getFirstUnmatchPosition(value, newValue)
}

export const getNewEventFromInput = (
  inputToValidate: string,
  newInputValue: string,
  previousEvent?: Event
): Event => {
  const now = Date.now()

  if (!previousEvent) {
    return {
      type: 'add',
      ms: 0,
      value: newInputValue,
      success: inputToValidate.startsWith(newInputValue),
      date: now,
      position: 0
    }
  }

  const previousValue = previousEvent.value
  const type = getEventType(previousValue, newInputValue)
  const isValid = inputToValidate.startsWith(newInputValue)
  const ms = (now - previousEvent.date) + previousEvent.ms

  return {
    type,
    value: newInputValue,
    success: isValid,
    date: now,
    ms,
    position: getEventPosition(type, previousValue, newInputValue)
  }
}
