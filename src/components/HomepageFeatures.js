import React from 'react';
import Postgres from '../../static/third_party_logos/postgres.svg';
import Mysql from '../../static/third_party_logos/mysql.svg';
import Mongo from '../../static/third_party_logos/mongo.svg';
import Slack from '../../static/third_party_logos/slack.svg';
import Slideshow from '../components/Slideshow';
import 'react-slideshow-image/dist/styles.css';

import
{
	ClockIcon,

	EyeIcon,

	HomeIcon,
	LightningBoltIcon,
	LockClosedIcon,

	ShieldCheckIcon,
	ExternalLinkIcon,
	SwitchHorizontalIcon,
	CheckIcon,
	ClipboardCopyIcon,
} from '@heroicons/react/outline'

const features = [
	{
		name: <div className='flex  justify-center'>UI? Done <CheckIcon className="text-green-600 h-6" aria-hidden="true" /></div>,
		description: <span>UI is autogenerated from your scripts.Gain velocity, reduce tech debt.</span >,
		icon: LightningBoltIcon,
	},
	{
		name: 'Schedules',
		description: 'Trigger scripts and flows using cron-like schedules',
		icon: ClockIcon,
	},
	{
		name: 'Self-hostable OSS workers (soon)',
		description: 'The workers executing your scripts can be self-hostable on-prem. Workers will be Open-Source Software.',
		icon: HomeIcon,
	},
	{
		name: 'Granular Permissions & Approval flows',
		description: <span>Every item is tightly permissioned to users and groups. Ask approvals with one-liners inside your scripts.</span>,
		icon: LockClosedIcon,
	},
	{
		name: 'Versioning',
		description: <span>Scripts are never overwritten, they are versioned.</span>,
		icon: ClipboardCopyIcon,
	},
	{
		name: 'Push to Deploy & Exportable Workspace',
		description: <span>Deploy automatically during CI/CD from Github and export at anypoint your entire workspace as tarball. No lock-in</span>,
		icon: SwitchHorizontalIcon,
	},
	{
		name: 'Secrets',
		description: `Secrets are kept secure and encrypted. When using self-hostable workers, they are not visible to us.`,
		icon: ShieldCheckIcon,
	},
	{
		name: 'Slack commands and Webhooks',
		description: 'Scripts are also triggerable from a /Windmill slack command or webhooks',
		icon: ExternalLinkIcon,
	},
	{
		name: 'Audit logs',
		description: 'Root cause any mishaps and learn from your mistakes thanks to exhaustive audit logs',
		icon: EyeIcon,
	},


]

export default function HomepageFeatures()
{
	return (
		<div>
			<div className="relative pt-20 pb-10">
				<div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
					<h2 className="text-base font-semibold uppercase tracking-wider text-blue-600">Everything in one-platform</h2>
					<p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
						develop, share, and run all your automations and internal apps in a single platform.
					</p>
					<div className="mt-12">
						<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
							{features.map((feature) => (
								<div key={feature.name} className="pt-6">
									<div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
										<div className="-mt-6">
											<div>
												<span className="inline-flex items-center justify-center rounded-md bg-blue-500 p-3 shadow-lg">
													<feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
												</span>
											</div>
											<h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
											<p className="mt-5 text-base text-gray-500">{feature.description}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="relative mt-20 py-10 overflow-hidden">
				<div className="relative">
					<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:grid-flow-col-dense ">
						<div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
							<div>
								<div className="mt-6">
									<h2 className="text-3xl font-extrabold tracking-tight font-boldtext-gray-900">
										Build complex workflows in minutes without accumulating UI tech debt
									</h2>
									<p className="mt-4 text-lg text-gray-500">
										Apps and their UI are automatically generated and continuously updated from your script parameters. Refine the UI if desired.
										<br /><br />
										Compose and chain your own scripts and community made generic scripts as modular blocks of flows.
										<br /><br />
										Develop and maintain scripts from our feature-complete webeditor or use your own IDE and deploy from Github.
										<br /><br />
										<span className='font-bold'>The generated UI makes it very simple to expose your app to non-technical users while
											requiring minimal efforts to develop and maintain.</span>
									</p>
								</div>
							</div>
						</div>
						<div className="mt-12 sm:mt-16 lg:mt-0 lg:col-span-2">
							<div className="flex flex-col p-4 lg:-ml-4 sm:pr-6 lg:px-0  lg:h-full ">
								<div className='w-full lg:max-w-none m-auto'>
									<img
										className=""
										src="/img/parser.png"
										alt="UI parser"
									/>
									<p className='text-gray-700 italic  text-sm text-center'>Script parameters are parsed automatically to generate your app UI that you may still refine</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-40">
				<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-20">
					<div className="px-4 max-w-xl m-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
						<div>
							<div className="mt-6">
								<h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
									Make your internal operations production grade with ease
								</h2>
								<p className="mt-4 text-lg text-gray-500">
									Your team never has to worry about deploying and managing the infra of your internal operations.
									<br /><br />
									Secure your sensitive information and passwords: your <span className='font-bold'>secrets</span> are tightly permissioned.
									<br /><br />
									Keep track of operations with <span className='font-bold'>audit logs</span> enabling you to root cause quickly any mishaps.
									<br /><br />
									Define visibility, edit rights and executability for your scripts, resources, schedules, etc using <span className='font-bold'>groups' and users' granular permissions</span>.
									<br /><br />
									Upskill your less technical members interested in authoring scripts themselves by having them learn Python in an accessible and integrated environment.
								</p>
							</div>
						</div>
					</div>
					<div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
						<div className="flex p-4 lg:-ml-4 sm:pr-6 lg:px-0  lg:h-full">
							<div className='w-full lg:max-w-none m-auto'>

								<img
									className="rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 "
									src="/img/run_script.png"
									alt="Run UI"
								/>
								<p className='mt-10 text-gray-700 italic  text-sm text-center'>The generated apps are not limited to simple fields. Upload files, use lists, etc...</p>

							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-40">
				<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:grid-flow-col-dense lg:gap-20">
					<div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 lg:col-span-2">
						<div>
							<div className="mt-6">
								<h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
									Replace all your sparely used niche tools: <br /> We cover every use-case and to any API
								</h2>
								<p className="mt-4 text-lg text-gray-500">
									Windmill is extremely generic, it uses simple but powerful abstractions. If you can script it, then Windmill can do it.
									<br /><br />
									Trigger scripts from  <span className='font-bold'>slack commands</span>,  <span className='font-bold'>autogenerated UI</span>,  <span className='font-bold'>Webhooks</span> and  <span className='font-bold'>Schedules</span>.
									<br /><br />
									Many tools do only one thing, and are focused on one specific problem. You need to setup many different niche tools from whom you exploit only a tiny portion of the features.
									<br /><br />
									Unlike other automation tools, we do not reinvent the wheel with proprietary connectors and UI, connect to any API using any standard python client or dependencies available in PyPI.<br /><br />
									<span className='font-bold'>Any python library becomes a connector.</span><br />
									<div className="flex flex-row gap-4 mt-10 justify-center">
										<Postgres />
										<Mysql />
										<Mongo />
										<Slack />
										<span className='text-xs font-mono my-auto'>... anything with a python client</span>
									</div>
								</p>
							</div>
						</div>
					</div>
					<div className="mt-12 sm:mt-16 lg:mt-0 lg:col-span-1">
						<div className="flex flex-col justify-center p-4 lg:-ml-4 sm:pr-6 lg:px-0 mx-auto lg:h-full ">
							<div class="my-auto">
								<img
									className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:w-auto object-scale-down"
									src="/img/schedule.png"
									alt="Schedule"
								/>
								<div className="object-scale-down w-full lg:w-auto">
									<img
										className="m-auto mt-10 rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 "

										src="/img/slack_command.png"
										alt="Slack command"
									/>
								</div>
								<p className='mt-10 text-gray-700 italic  text-sm text-center'>Scripts can be triggered from schedules or interacted with from slack, build custom slackbots in minutes</p>

							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-40">

				<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-5 lg:grid-flow-col-dense lg:gap-20 overflow-visible">
					<div className="px-4 max-w-xl m-auto sm:px-6 lg:pb-16 lg:max-w-none lg:col-span-2 lg:mx-0 lg:px-0">
						<div>
							<div className="mt-2">
								<h2 className="text-3xl font-extrabold tracking-tight font-boldtext-gray-900">
									Coding is seldom the bottleneck, it is everything else
								</h2>
								<p className="mt-4 text-lg text-gray-500">
									Not just for developers, the generated Apps are meant to be used by all, and the included powerful Webeditor with previews enable quick feedback loops.
									<br /><br />
									As a dev, you will feel right at home with Windmill. Indeed, most of the concepts used throughout Windmill are the ones you are already familiar as the best practices from software engineering in production
								</p>
							</div>
						</div>
					</div>
					<div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1 lg:col-span-3 ">
						<Slideshow></Slideshow>
						{/* <img
									className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5  lg:w-auto m-auto"
									src="/img/editor.png"
									alt="editor"
								/> */}
					</div>
				</div>
			</div>



		</div>
	)
}


