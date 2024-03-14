#!/usr/bin/env bash

echo "${SERVICENOW_PASSWORD}" |
  now-sdk auth save instance \
  --username "${SERVICENOW_USERNAME}" \
  --host "${SERVICENOW_INSTANCE_URL}"
