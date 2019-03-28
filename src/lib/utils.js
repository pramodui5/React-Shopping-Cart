export function createAPIActions(prefix, suffix) {
  const PREFIX = prefix.toUpperCase();
  const SUFFIX = suffix.toUpperCase();
  return {
    REQUEST: `${PREFIX}/${SUFFIX}_REQUEST`,
    SUCCESS: `${PREFIX}/${SUFFIX}_SUCCESS`,
    FAILURE: `${PREFIX}/${SUFFIX}_FAILURE`
  };
}
