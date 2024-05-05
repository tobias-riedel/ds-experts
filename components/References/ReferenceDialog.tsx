import CompanyMap from '@components/Map/CompanyMap';
import { CENTER_OF_GERMANY_COORDINATES, DEFAULT_EXPERT_IMG, PROJECT_MAP_ZOOM } from '@consts/misc';
import { Button, Dialog, Flex, Text } from '@radix-ui/themes';
import { ProjectWithExperts } from '@server/trpc/shared/project';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

const EXPERT_IMG_WIDTH = 40;
const EXPERT_IMG_HEIGHT = 40;

const monthsDiff = (date1: Date, date2: Date): number => {
  const months = (date2.getFullYear() - date1.getFullYear()) * 12 + date2.getMonth() - date1.getMonth();
  return months + 1;
};

const getProjectDuration = (startedAt?: string, endedAt?: string): string => {
  if (!startedAt) {
    return '';
  }

  const start = new Date(startedAt);
  const end = endedAt ? new Date(endedAt) : new Date();

  const months = monthsDiff(start, end);
  const years = Math.floor(months / 12);

  const diffMonths = months % 12;

  const duration =
    (years > 0 ? `${years} Jahr${years === 1 ? '' : 'e'}` : '') +
    (years > 0 && diffMonths > 0 ? ', ' : '') +
    (diffMonths > 0 ? `${diffMonths} Monat${diffMonths === 1 ? '' : 'e'}` : '');

  return duration;
};

const ReferenceDialog = ({ children, data }: PropsWithChildren<{ data?: ProjectWithExperts | null }>): JSX.Element => {
  const duration = getProjectDuration(data?.startedAt ?? '', data?.endedAt ?? '');

  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>

      <Dialog.Content style={{ maxWidth: 'min(700px, 94vw)', minWidth: 320 }}>
        <Flex gap="3" justify="between" align="start">
          <Dialog.Title>{data?.projectName}</Dialog.Title>
          <Dialog.Close>
            <Button className="btn p-0">
              <i className="fas fa-close"></i>
            </Button>
          </Dialog.Close>
        </Flex>

        <Flex direction="column" gap="3">
          <div className="row">
            <div className="col-md-6">
              <div className="col-12">
                <label>
                  <Text as="div" size="3" mb="1" weight="bold" color="gray">
                    Partner
                  </Text>
                  <Text as="div" size="4" mb="1" weight="bold">
                    {data?.partnerName}
                  </Text>
                </label>
              </div>

              <div className="col-12">
                <label>
                  <Text as="div" size="3" mb="1" weight="bold" color="gray">
                    Stadt
                  </Text>
                  <Text as="div" size="4" mb="1" weight="bold">
                    {data?.city}
                  </Text>
                </label>
              </div>

              <div className="col-12">
                <label>
                  <Text as="div" size="3" mb="1" weight="bold" color="gray">
                    Dauer
                  </Text>
                  <Text as="div" size="4" mb="1" weight="bold">
                    {duration || '-'}
                  </Text>
                </label>
              </div>

              {(data?.experts?.length ?? 0) > 0 && (
                <div className="col-12">
                  <label>
                    <Text as="div" size="3" mb="1" weight="bold" color="gray">
                      Experten
                    </Text>

                    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                      {data?.experts
                        ?.map((item) => item.expert)
                        .filter((expert) => expert != null)
                        .map((expert, idx) => (
                          <li key={idx}>
                            <Image
                              src={expert.img || DEFAULT_EXPERT_IMG}
                              alt={`Porträt von ${expert.firstName} ${expert.lastName}`}
                              title={`${expert.firstName} ${expert.lastName}`}
                              className="rounded-circle optimized-image"
                              width={EXPERT_IMG_WIDTH}
                              height={EXPERT_IMG_HEIGHT}
                              style={{
                                width: EXPERT_IMG_WIDTH,
                                height: EXPERT_IMG_HEIGHT,
                                marginRight: '.5rem',
                                marginBottom: '.25rem',
                              }}
                            />
                            {expert.firstName} {expert.lastName}
                          </li>
                        ))}
                    </ul>
                  </label>
                </div>
              )}
            </div>

            <div className="col-md-6">
              <div className="pb-4">
                <CompanyMap
                  height={320}
                  zoom={PROJECT_MAP_ZOOM}
                  lattitude={data?.locationLat}
                  longitude={data?.locationLong}
                  anchorLattitude={CENTER_OF_GERMANY_COORDINATES[0]}
                  anchorLongitude={CENTER_OF_GERMANY_COORDINATES[1]}
                  offsetX={138}
                  offsetY={128}
                  tooltipText={data?.city}
                  tooltipSubtext={data?.partnerName || ''}
                  disableMarkerTooltip={true}
                />
              </div>
            </div>
          </div>
        </Flex>

        <div className="rt-Text rt-r-size-2 rt-r-mb-4">
          {data?.description ? (
            <label>
              <Text as="div" size="3" mb="1" weight="bold" color="gray">
                Projektbeschreibung
              </Text>
            </label>
          ) : null}

          <span className="ql-snow">
            <Text dangerouslySetInnerHTML={{ __html: data?.description || '' }} className="ql-editor"></Text>
          </span>
        </div>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button className="btn btn-primary p-1 px-4">Schließen</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default ReferenceDialog;
