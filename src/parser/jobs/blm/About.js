import React, {Fragment} from 'react'
import {Icon, Message} from 'semantic-ui-react'

import {ActionLink} from 'components/ui/DbLink'
import ACTIONS from 'data/ACTIONS'
import CONTRIBUTORS from 'data/CONTRIBUTORS'
import CoreAbout from 'parser/core/modules/About'

export default class About extends CoreAbout {
	description = <Fragment>
		<p>This analyser aims to identify how you&apos;re not actually casting <ActionLink {...ACTIONS.FIRE_4} /> as much as you think you are.</p>
		<Message warning icon>
			<Icon name="warning sign"/>
			<Message.Content>
				This isn&apos;t even remotely done.
			</Message.Content>
		</Message>
	</Fragment>
	supportedPatch = '4.35'
	contributors = [
		{user: CONTRIBUTORS.LAQI, role: 'Maintainer'},
	]
}
