import type { TechnologyEntity } from 'entities'

type Technology = TechnologyEntity.Model.Types.Technology

export const createTag = (...args: Technology[keyof Technology][]): Technology => {
	const keys: (keyof Technology)[] = ['name', 'category', 'group', 'iconName']

	return keys.reduce((acc, key, index) => {
		acc[key] = args[index] as never

		return acc
	}, {} as Technology)
}