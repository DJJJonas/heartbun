import type Engine from ".";

/**
 * Responsible for propagating events and dispatching events
 */
export default class EventManager {
  constructor(private engine: Engine) {}

  endTurn() {
    this.engine.turn++;
  }
}
