import fs from 'node:fs'
import path from 'node:path'
import { PROGRESS_FOLDER } from './constants'
import { store } from './store'

/**
 * Initialize environment.
 * @param options optional options. Mostly for testing purpose.
 */
export function init(options = { rootDir: '.' }) {
	fs.mkdirSync(path.join(options.rootDir, PROGRESS_FOLDER), { recursive: true })
	store.value.rootDir = options.rootDir
}
