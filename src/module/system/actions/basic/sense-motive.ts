import { ActionsPF2e, SkillActionOptions } from '../actions';

export function senseMotive(options: SkillActionOptions) {
    const { checkType, property, stat, subtitle } = ActionsPF2e.resolveStat(options?.skill ?? 'perception');
    ActionsPF2e.simpleRollActionCheck(
        options.actors,
        property,
        options.glyph ?? 'A',
        'PF2E.Actions.SenseMotive.Title',
        subtitle,
        options.modifiers,
        ['all', checkType, stat, 'action:sense-motive'],
        ['action:sense-motive'],
        ['concentrate', 'secret'],
        checkType,
        options.event,
        (target) => target.deception,
    );
}
