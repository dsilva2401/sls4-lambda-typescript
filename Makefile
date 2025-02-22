# Default stage
STAGE ?= dev

deploy:
	@sls deploy --stage $(STAGE)

run-local:
	@sls invoke -f app