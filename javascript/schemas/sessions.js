exports.sessionsSchema = `
enum CDP_SessionState {
  START,
  STOP,
  PAUSE,
  RESUME
}

type CDP_SessionStateEvent implements CDP_EventInterface {
  id: ID!
  _source : CDP_Source
  _client : CDP_Client
  _profileID: CDP_ProfileID!
  _profile : CDP_Profile!
  _object: CDP_Object!
  _location: GeoPoint
  _timestamp: DateTime
  _topics : [CDP_Topic]
  state : CDP_SessionState
}

input CDP_SessionStateEventInput {
  state : CDP_SessionState
}

type CDP_SessionStateEventFilter {
  state_equals : CDP_SessionState
}

input CDP_SessionStateEventFilterInput {
  state_equals : CDP_SessionState
}

`;
