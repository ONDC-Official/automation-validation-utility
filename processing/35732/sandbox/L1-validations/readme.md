

- **search** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_MESSAGE_SHORT_DESC**: $.message.issue.descriptor.short_desc must be present in the payload
	
		> Note: **Condition REQUIRED_MESSAGE_SHORT_DESC** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.issue.descriptor.short_desc must **not** be present in the payload